@file:Suppress("PropertyName")

package io.kotest.core

import io.kotest.core.extensions.Extension
import io.kotest.core.extensions.TestCaseExtension
import io.kotest.core.factory.TestFactory
import io.kotest.core.factory.addPrefix
import io.kotest.core.listeners.TestListener
import io.kotest.core.spec.AfterAny
import io.kotest.core.spec.AfterContainer
import io.kotest.core.spec.AfterEach
import io.kotest.core.spec.AfterSpec
import io.kotest.core.spec.AfterTest
import io.kotest.core.spec.AroundTestFn
import io.kotest.core.spec.AutoCloseable
import io.kotest.core.spec.BeforeAny
import io.kotest.core.spec.BeforeContainer
import io.kotest.core.spec.BeforeEach
import io.kotest.core.spec.BeforeSpec
import io.kotest.core.spec.BeforeTest
import io.kotest.core.spec.PrepareSpec
import io.kotest.core.spec.Spec
import io.kotest.core.spec.TestCaseExtensionFn
import io.kotest.core.test.AssertionMode
import io.kotest.core.test.DescriptionName
import io.kotest.core.test.TestCase
import io.kotest.core.test.TestCaseConfig
import io.kotest.core.test.TestCaseOrder
import io.kotest.core.test.TestContext
import io.kotest.core.test.TestResult
import io.kotest.core.test.TestType
import kotlin.js.JsName

/**
 * An abstract base implementation for shared configuration between [Spec] and [TestFactoryConfiguration].
 */
abstract class TestConfiguration {

   @JsName("_tags")
   internal var _tags: Set<Tag> = emptySet()

   @JsName("_listeners")
   internal var _listeners = emptyList<TestListener>()

   @JsName("_extensions")
   internal var _extensions = emptyList<Extension>()

   internal var _autoCloseables = emptyList<Lazy<AutoCloseable>>()

   /**
    * Config applied to each test case if not overridden per test case.
    * If left null, then defaults to the project default.
    */
   var defaultTestConfig: TestCaseConfig? = null

   /**
    * Sets an assertion mode which is applied to every test.
    * If null, then the the project default is used.
    */
   var assertions: AssertionMode? = null

   /**
    * Sets the [TestCaseOrder] for root tests in this spec or factory.
    * If null, then the order is defined by the project default.
    */
   var testOrder: TestCaseOrder? = null

   /**
    * Register a single [TestListener] of type T return that listener.
    */
   fun <T : TestListener> listener(listener: T): T {
      listeners(listener)
      return listener
   }

   /**
    * Register multiple [TestListener]s.
    */
   fun listeners(vararg listener: TestListener) {
      _listeners = _listeners + listener.toList()
   }

   /**
    * Register a single [TestCaseExtension] of type T return that extension.
    */
   fun <T : Extension> extension(extension: T): T {
      extensions(extension)
      return extension
   }

   /**
    * Register multiple [TestCaseExtension]s.
    */
   fun extensions(vararg extensions: Extension) {
      _extensions = _extensions + extensions.toList()
   }

   /**
    * Adds [Tag]s to this spec or factory, which will be applied to each test case.
    *
    * When applied in a factory, only tests generated from that factory will have the tags applied.
    * When applied to a spec, all tests will have the tags applied.
    */
   fun tags(vararg tags: Tag) {
      _tags = _tags + tags.toSet()
   }

   /**
    * Registers an [AutoCloseable] to be closed when the spec is completed.
    */
   @Suppress("PropertyName")
   fun <T : AutoCloseable> autoClose(closeable: T): T {
      _autoCloseables = listOf(lazy { closeable }) + _autoCloseables
      return closeable
   }

   /**
    * Registers a lazy [AutoCloseable] to be closed when the spec is completed.
    */
   fun <T : AutoCloseable> autoClose(closeable: Lazy<T>): Lazy<T> {
      autoClose(closeable.value)
      return closeable
   }

   /**
    * Returns the actual test order to use, taking into account spec config and global config.
    */
   abstract fun resolvedTestCaseOrder(): TestCaseOrder

   abstract fun addTest(
      name: DescriptionName.TestName,
      test: suspend TestContext.() -> Unit,
      config: TestCaseConfig,
      type: TestType
   )

   /**
    * Include the tests from the given [TestFactory] in this spec or factory.
    * Tests are added in order from where this include was invoked using configuration and
    * settings at the time the method was invoked.
    */
   fun include(factory: TestFactory) {
      val tests = when (resolvedTestCaseOrder()) {
         TestCaseOrder.Sequential -> factory.tests
         TestCaseOrder.Random -> factory.tests.shuffled()
         TestCaseOrder.Lexicographic -> factory.tests.sortedBy { it.name.displayName().toLowerCase() }
      }
      tests.forEach { addTest(it.name, it.test, it.config, it.type) }
   }

   /**
    * Includes the tests from the given [TestFactory] in this spec or factory, with the given
    * prefixed added to each of the test's name.
    */
   fun include(prefix: String, factory: TestFactory) {
      include(factory.copy(tests = factory.tests.map { it.addPrefix(prefix) }))
   }

   /**
    * Registers a callback to be executed before every [TestCase].
    *
    * The [TestCase] about to be executed is provided as the parameter.
    */
   fun beforeTest(f: BeforeTest) {
      listener(object : TestListener {
         override suspend fun beforeTest(testCase: TestCase) {
            f(testCase)
         }
      })
   }

   /**
    * Registers a callback to be executed after every [TestCase].
    *
    * The callback provides two parameters - the test case that has just completed,
    * and the [TestResult] outcome of that test.
    */
   fun afterTest(f: AfterTest) {
      listener(object : TestListener {
         override suspend fun afterTest(testCase: TestCase, result: TestResult) {
            f(Tuple2(testCase, result))
         }
      })
   }

   /**
    * Registers a callback to be executed before every [TestCase]
    * with type [TestType.Container].
    *
    * The [TestCase] about to be executed is provided as the parameter.
    */
   fun beforeContainer(f: BeforeContainer) {
      listener(object : TestListener {
         override suspend fun beforeContainer(testCase: TestCase) {
            f(testCase)
         }
      })
   }

   /**
    * Registers a callback to be executed after every [TestCase]
    * with type [TestType.Container].
    *
    * The callback provides two parameters - the test case that has just completed,
    * and the [TestResult] outcome of that test.
    */
   fun afterContainer(f: AfterContainer) {
      listener(object : TestListener {
         override suspend fun afterContainer(testCase: TestCase, result: TestResult) {
            f(Tuple2(testCase, result))
         }
      })
   }

   /**
    * Registers a callback to be executed before every [TestCase]
    * with type [TestType.Test].
    *
    * The [TestCase] about to be executed is provided as the parameter.
    */
   fun beforeEach(f: BeforeEach) {
      listener(object : TestListener {
         override suspend fun beforeEach(testCase: TestCase) {
            f(testCase)
         }
      })
   }

   /**
    * Registers a callback to be executed after every [TestCase]
    * with type [TestType.Test].
    *
    * The callback provides two parameters - the test case that has just completed,
    * and the [TestResult] outcome of that test.
    */
   fun afterEach(f: AfterEach) {
      listener(object : TestListener {
         override suspend fun afterEach(testCase: TestCase, result: TestResult) {
            f(Tuple2(testCase, result))
         }
      })
   }

   /**
    * Registers a callback to be executed before every [TestCase]
    * with type [TestType.Test] or [TestType.Container].
    *
    * The [TestCase] about to be executed is provided as the parameter.
    */
   fun beforeAny(f: BeforeAny) {
      listener(object : TestListener {
         override suspend fun beforeAny(testCase: TestCase) {
            f(testCase)
         }
      })
   }

   /**
    * Registers a callback to be executed after every [TestCase]
    * with type [TestType.Container] or [TestType.Test].
    *
    * The callback provides two parameters - the test case that has just completed,
    * and the [TestResult] outcome of that test.
    */
   fun afterAny(f: AfterAny) {
      listener(object : TestListener {
         override suspend fun afterAny(testCase: TestCase, result: TestResult) {
            f(Tuple2(testCase, result))
         }
      })
   }

   /**
    * Registers a callback to be executed before any tests in this spec.
    * The spec instance is provided as a parameter.
    */
   fun beforeSpec(f: BeforeSpec) {
      listener(object : TestListener {
         override suspend fun beforeSpec(spec: Spec) {
            f(spec)
         }
      })
   }

   /**
    * Register an extension callback
    */
   fun extension(f: TestCaseExtensionFn) {
      extension(object : TestCaseExtension {
         override suspend fun intercept(testCase: TestCase, execute: suspend (TestCase) -> TestResult): TestResult =
            f(Tuple2(testCase, execute))
      })
   }

   /**
    * Registers a callback to be executed after all tests in this spec.
    * The spec instance is provided as a parameter.
    */
   fun afterSpec(f: AfterSpec) {
      listener(object : TestListener {
         override suspend fun afterSpec(spec: Spec) {
            f(spec)
         }
      })
   }

   fun aroundTest(aroundTestFn: AroundTestFn) {
      extension(object : TestCaseExtension {
         override suspend fun intercept(testCase: TestCase, execute: suspend (TestCase) -> TestResult): TestResult {
            val f: suspend (TestCase) -> TestResult = { execute(it) }
            return aroundTestFn(Tuple2(testCase, f))
         }
      })
   }

   @Deprecated(
      "Cannot use inline version of prepare spec since this must run before the spec is created. Create a TestListener instance and register that globally.",
      level = DeprecationLevel.ERROR
   )
   fun prepareSpec(f: PrepareSpec) {
   }
}

fun TestConfiguration.autoCloseables(): List<Lazy<AutoCloseable>> = _autoCloseables.toList()