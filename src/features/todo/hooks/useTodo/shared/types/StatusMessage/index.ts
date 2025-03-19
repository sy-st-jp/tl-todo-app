type StatusCode = 200 | 201 | 400 | 404 | 500
type StatusMap<Codes extends StatusCode> = Record<Codes, string> & {
    default: string
}

export type StatusMessage<Codes extends StatusCode = never> = StatusMap<Codes>;
