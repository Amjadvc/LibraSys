import Button from './Button';

export function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-50 p-12">
      <div className="flex-0-1-96rem rounded-lg border border-gray-100 bg-white p-12 text-center">
        <h1 className="mb-4">Something went wrong 🤨</h1>
        <p className="font-mono mb-8 text-gray-500">{error.message}</p>
        <Button size="large" onClick={resetErrorBoundary}>
          Try again
        </Button>
      </div>
    </main>
  );
}
