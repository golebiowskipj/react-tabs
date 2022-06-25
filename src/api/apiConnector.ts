interface GetParams {
  url: string
}

interface ApiConnector {
  get: <ResponseType>(params: GetParams) => Promise<ResponseType>
}

export const apiConnector = (baseUrl: string): ApiConnector => {
  const get = async <ResponseType>({ url }: GetParams) => {
    const response = await fetch(`${baseUrl}/${url}`, { method: 'GET' })

    if (!response.ok) {
      throw new Error(`HTTP erorr! status: ${response.status}`)
    }

    const data = await response.json()

    return data as ResponseType
  }
  return {
    get,
  }
}
