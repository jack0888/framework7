import { Dom7Instance } from 'dom7';
import Framework7, { CSSSelector, Framework7EventsClass, Framework7Plugin } from '../app/app-class';
import { View } from '../view/view';
import { Searchbar } from '../searchbar/searchbar';

export namespace SmartSelect {
  interface Events {
    /** Event will be triggered when Smart Select starts its opening animation. As an argument event handler receives smart select instance */
    open: (smartSelect : SmartSelect) => void
    /** Event will be triggered when Smart Select completes its opening animation. As an argument event handler receives smart select instance */
    opened: (smartSelect : SmartSelect) => void
    /** Event will be triggered when Smart Select starts its closing animation. As an argument event handler receives smart select instance */
    close: (smartSelect : SmartSelect) => void
    /** Event will be triggered after Smart Select completes its closing animation. As an argument event handler receives smart select instance */
    closed: (smartSelect : SmartSelect) => void
    /** Event will be triggered right before Smart Select instance will be destroyed */
    beforeDestroy: (smartSelect : SmartSelect) => void
  }
  interface Parameters {
    /** Smart Select element. Can be useful if you already have Smart Select element in your HTML and want to create new instance using this element */
    el: HTMLElement | CSSSelector
    /** Link to initialized View instance which is required for Smart Select to work. By default, if not specified, it will be opened in parent View. */
    view: View.View
    /** Visual element where to insert selected value. If not passed then it will look for <div class="item-after"> element */
    valueEl: HTMLElement | CSSSelector
    /** Defines how to open Smart Select. Can be page or popup or popover or sheet (default is "page") */
    openIn: 'page' | 'popup' | 'popover' | 'sheet'
    /** Smart select page title. If not passed then it will be the <div class="item-title"> text */
    pageTitle: string
    /** Smart select Page back link text (default 'Back') */
    pageBackLinkText: string
    /** Smart select Popup close link text (default 'Close') */
    popupCloseLinkText: string
    /** Smart select Sheet close link text (default 'Done') */
    sheetCloseLinkText: string
    /** Enables Searchbar on smart select page. If passed as object then it should be valid Searchbar parameters (default false) */
    searchbar: boolean | Searchbar.Parameters
    /** Searchbar placeholder text (default 'Search') */
    searchbarPlaceholder: string
    /** Searchbar "cancel" link text. Has effect only in iOS theme (default 'Cancel') */
    searchbarDisableText: string
    /** Appends block with content that displayed when there are no Searchbar results (default false) */
    appendSearchbarNotFound: boolean | string | HTMLElement
    /** If enabled then smart select will be automatically closed after user selectes any option (default false) */
    closeOnSelect: boolean
    /** Enable Virtual List for smart select if your select has a lot (hundreds, thousands) of options (default false) */
    virtualList: boolean
    /** Virtual list item height. If number - list item height in px. If function then function should return item height */
    virtualListHeight: number | Function
    /** Smart select page form color theme. One of the default colors */
    formColorTheme: string
    /** Smart select navbar color theme. One of the default colors */
    navbarColorTheme: string
    /** Will add opened smart select modal (when openIn is popup, popover or sheet) to router history which gives ability to close smart select by going back in router history and set current route to the smart select modal (default true) */
    routableModals: boolean
    /** Smart select page/modal URL that will be set as a current route (default 'select/') */
    url: string
    /** Additional CSS class name to be set on Smart Select container (Page, Popup, Popover or Sheet) */
    cssClass: string

    /** Function to render smart select page, must return full page HTML string */
    renderPage: (items: any[]) => string,
    /** Function to render smart select popup, must return full popup HTML string */
    renderPopup: (items: any[]) => string,
    /** Function to render smart select sheet, must return full sheet HTML string */
    renderSheet: (items: any[]) => string,
    /** Function to render smart select popover, must return full popover HTML string */
    renderPopover: (items: any[]) => string,
    /** Function to render all smart select items, must return all items HTML string */
    renderItems: (items: any[]) => string,
    /** Function to render smart select item, must return item HTML string */
    renderItem: (item: any, index: number) => string,
    /** Function to render smart select searchbar dropdown, must return searchbar HTML string */
    renderSearchbar: () => string,

    /** Object with events handlers.. */
    on: {
      [event in keyof Events] : Events[event]
    }
  }
  interface SmartSelect extends Framework7EventsClass<Events> {
    /** Link to global app instance */
    app : Framework7
    /** Smart Select HTML element */
    el : HTMLElement
    /** Dom7 instance with Smart Select HTML element */
    $el : Dom7Instance
    /** HTML element used to display value */
    valueEl: HTMLElement
    /** Dom7 instance with HTML element used to display value */
    $valueEl: Dom7Instance
    /** Child select element <select> */
    selectEl: HTMLElement
    /** Dom7 instance with child select element */
    $selectEl: Dom7Instance
    /** Smart Select URL (that was passed in url parameter) */
    url: string
    /** Smart Select View (that was passed in view parameter) or found parent view */
    view: View.View
    /** Smart Select parameters */
    params : Parameters

    /** Open smart select. */
    open() : SmartSelect
    /** Close smart select. */
    close() : SmartSelect
    /** Destroy smart select */
    destroy() : void
  }
  interface DomEvents {
    /** Event will be triggered when Smart Select starts its opening animation */
    'smartselect:open' : () => void
    /** Event will be triggered after Smart Select completes its opening animation */
    'smartselect:opened' : () => void
    /** Event will be triggered when Smart Select starts its closing animation */
    'smartselect:close' : () => void
    /** Event will be triggered after Smart Select completes its closing animation */
    'smartselect:closed' : () => void
    /** Event will be triggered right before Smart Select instance will be destroyed */
    'smartselect:beforedestroy' : () => void
  }

  interface AppMethods {
    smartSelect: {
      /** create Smart Select instance */
      create(parameters : Parameters) : SmartSelect
      /** destroy Smart Select instance */
      destroy(el : HTMLElement | CSSSelector | SmartSelect) : void
      /** get Smart Select instance by HTML element */
      get(el : HTMLElement | CSSSelector) : SmartSelect
      /** open Smart Select */
      open(el : HTMLElement | CSSSelector) : SmartSelect
      /** close Smart Select */
      close(el : HTMLElement | CSSSelector) : SmartSelect
    }
  }
  interface AppParams {
    smartSelect: Parameters
  }
  interface AppEvents {
    /** Event will be triggered when Smart Select starts its opening animation. As an argument event handler receives smart select instance */
    smartSelectOpen: (smartSelect : SmartSelect) => void
    /** Event will be triggered when Smart Select completes its opening animation. As an argument event handler receives smart select instance */
    smartSelectOpened: (smartSelect : SmartSelect) => void
    /** Event will be triggered when Smart Select starts its closing animation. As an argument event handler receives smart select instance */
    smartSelectClose: (smartSelect : SmartSelect) => void
    /** Event will be triggered after Smart Select completes its closing animation. As an argument event handler receives smart select instance */
    smartSelectClosed: (smartSelect : SmartSelect) => void
    /** Event will be triggered right before Smart Select instance will be destroyed */
    smartSelectBeforeDestroy: (smartSelect : SmartSelect) => void
  }
}
declare const SmartSelectComponent: Framework7Plugin;
export default SmartSelectComponent;