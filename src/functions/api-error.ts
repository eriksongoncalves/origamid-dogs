export default function apiError(error: unknown) {
  const errorMessage = error instanceof Error ? error.message : "Ocorrreu um erro inesperado"

  return {
    ok: false,
    error: errorMessage,
    data: null
  }
}
