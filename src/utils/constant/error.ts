import { IErrorObj } from "../../types/app";

const ERROR_OBJECT: IErrorObj = {
    DATA_NOT_FOUND: {
        statusCode: 404,
        message: "Data not found",
    },
    WRONG_INPUT: {
        statusCode: 400,
        message: "Wrong input"
    },
    EXISTED_DATA: { 
        statusCode: 403,
        message: "Data already exists"

    }

}

const ERROR_MESSAGE = {
    DATA_NOT_FOUND: "DATA_NOT_FOUND",
    WRONG_INPUT: "WRONG_INPUT",
    EXISTED_DATA: "EXISTED_DATA",
    
}

export {ERROR_MESSAGE, ERROR_OBJECT}