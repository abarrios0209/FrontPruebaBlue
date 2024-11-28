export interface RespuestaGenericaDto<T> {
    isSuccess: boolean;
    data:      T;
    message:   string;
}