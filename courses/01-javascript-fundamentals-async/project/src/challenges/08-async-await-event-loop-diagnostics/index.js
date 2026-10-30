export function solve_08_async_await_event_loop_diagnostics() {
  const steps = [];
  async function runDiagnostics() {
    try {
      steps.push("1. Synchronous: start");

      setTimeout(() => { steps.push("3. Macrotask: setTimeout"); }, 0);
      await Promise.resolve();
      steps.push("2. Microtask: await resumed");
      await new Promise((resolve) => { setTimeout(resolve, 0); });

      steps.push("4. After macrotask");
      return steps;
    } catch (error) {
      return [`Error: ${error.message}`];
    }

  } return runDiagnostics();
}