export interface Option {
    option: string,
    value: string,
    correct: boolean
}

export interface Questions {
    id: number,
    question: string,
    options: Option[] 
}
