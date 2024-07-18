export interface IButton {
    type : "button" | 'submit' | "reset";
    value : string;
    onClick : ()=>void;
    className : string
}