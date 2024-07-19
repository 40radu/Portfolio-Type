export interface IInputForm {
    placeholder : 'email' | 'name';
    name : 'email' | 'name';
    type : 'text' | 'email';
    onChange : (e : React.ChangeEvent <HTMLInputElement> ) => void
}