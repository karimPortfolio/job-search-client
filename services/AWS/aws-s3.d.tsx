
export interface Params {
    Bucket?: string,
    Key?: string
}

export interface ImageData {
    data: {
        Body: any,
    }
}

interface DataType {
    image: any | null
}

declare function GetS3Image(params: Params) :DataType;

export {GetS3Image};

