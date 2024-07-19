export interface INavLink {
    text : 'about' | 'skills' | 'contact' | 'home';
    href : string;
    onClick : ()=>void
}