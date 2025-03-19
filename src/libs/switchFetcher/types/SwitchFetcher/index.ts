type Fetcher<Request, Response> = (request: Request) => Response

export type SwitchFetcher = <Request, Response>(production: Fetcher<Request, Response>, mock?: Fetcher<Request, Response>) => Response
