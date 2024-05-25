import { generateID } from "./utilities";

const uniteOptions = [
    "A", "G", "H", "Img", "J", "Kg", "Km", "L", "lot", "M", "M2", "M3", "ML", "Min", "P", "Pcs", "sec", "T"
];

export const unitValue = uniteOptions.map((value => {
    return {
        _id: generateID,
        value: value
    }
}))


const tvaOptions = [
    "0.00", "1.00", "2.00", "2.10", "2.40", "2.50", "3.00", "3.80", "4.00", "4.50",
    "4.80", "5.00", "5.50", "6.00", "6.50", "7.00", "7.60", "8.00", "8.50", "8.75",
    "9.00", "10.00", "10.50", "11.00", "11.50", "12.00", "12.50", "13.00", "13.50",
    "14.00", "15.00", "16.00", "17.00", "18.00", "19.00", "19.25", "19.60", "20.00",
    "20.60", "21.00", "22.00", "23.00", "24.00", "25.00", "26.00", "27.00", "28.00",
    "29.00"
];
export const tvaPercent = tvaOptions.map((value) => {
    return {
        _id: generateID(),
        value: value
    };
});


export const limitoptions = [
    "Ne pas préciser",
    "À la réception",
    "À la commande",
    "Fin de mois",
    "15 jours",
    "20 jours",
    "30 jours",
    "45 jours",
    "60 jours",
    "90 jours",
    "30 jours fin de mois",
    "45 jours fin de mois",
    "60 jours fin de mois",
    "90 jours fin de mois",
    "Autre délai",
    "Saisir une date"
];
export const paymentMode = [
    "Ne pas préciser",
    "Carte bancaire",
    "Chèque",
    "Chèque Emploi Service Universel (CESU)",
    "Chèque vacances",
    "Espèces",
    "Mandat cash",
    "Virement bancaire",
    "Prélèvement",
    "LCR Lettre de Change Relevé",
    "Traite",
    "PayPal",
    "Autre"
];


export var discountRates: any[] = []
const generdiscountRate = () => {
    for (let index = 1; index < 100; index++) {
        const element = index;
        discountRates.push({
            _id: generateID(),
            value: element + "%"
        })

    }
}
generdiscountRate()

export const currencys = [
    { code: "AED", symbole: "د.إ" }, // Dirham des Émirats
    { code: "AFN", symbole: "؋" }, // Afghani
    { code: "ALL", symbole: "L" }, // Lek
    { code: "AMD", symbole: "֏" }, // Dram
    { code: "ANG", symbole: "ƒ" }, // Florin antillais
    { code: "AOA", symbole: "Kz" }, // Kwanza
    { code: "ARS", symbole: "$" }, // Peso argentin
    { code: "AUD", symbole: "$" }, // Dollar australien
    { code: "AWG", symbole: "ƒ" }, // Florin arubais
    { code: "AZN", symbole: "₼" }, // Manat
    { code: "BAM", symbole: "KM" }, // Mark convertible
    { code: "BBD", symbole: "$" }, // Dollar barbadien
    { code: "BDT", symbole: "৳" }, // Taka
    { code: "BGN", symbole: "лв" }, // Lev
    { code: "BHD", symbole: ".د.ب" }, // Dinar bahreïni
    { code: "BIF", symbole: "FBu" }, // Franc burundais
    { code: "BMD", symbole: "$" }, // Dollar bermudien
    { code: "BND", symbole: "$" }, // Dollar brunéien
    { code: "BOB", symbole: "Bs." }, // Boliviano
    { code: "BRL", symbole: "R$" }, // Real
    { code: "BSD", symbole: "$" }, // Dollar bahaméen
    { code: "BTN", symbole: "Nu." }, // Ngultrum
    { code: "BWP", symbole: "P" }, // Pula
    { code: "BYN", symbole: "Br" }, // Rouble biélorusse
    { code: "BZD", symbole: "$" }, // Dollar bélizien
    { code: "CAD", symbole: "$" }, // Dollar canadien
    { code: "CDF", symbole: "FC" }, // Franc congolais
    { code: "CHF", symbole: "CHF" }, // Franc suisse
    { code: "CLP", symbole: "$" }, // Peso chilien
    { code: "CNY", symbole: "¥" }, // Yuan renminbi
    { code: "COP", symbole: "$" }, // Peso colombien
    { code: "CRC", symbole: "₡" }, // Colon costaricien
    { code: "CUP", symbole: "$" }, // Peso cubain
    { code: "CVE", symbole: "$" }, // Escudo cap-verdien
    { code: "CZK", symbole: "Kč" }, // Couronne tchèque
    { code: "DJF", symbole: "Fdj" }, // Franc djiboutien
    { code: "DKK", symbole: "kr" }, // Couronne danoise
    { code: "DOP", symbole: "$" }, // Peso dominicain
    { code: "DZD", symbole: "د.ج" }, // Dinar algérien
    { code: "EGP", symbole: "£" }, // Livre égyptienne
    { code: "ERN", symbole: "Nfk" }, // Nakfa
    { code: "ETB", symbole: "Br" }, // Birr éthiopien
    { code: "EUR", symbole: "€" }, // Euro
    { code: "FJD", symbole: "$" }, // Dollar fidjien
    { code: "FKP", symbole: "£" }, // Livre des îles Malouines
    { code: "FOK", symbole: "kr" }, // Couronne féroïenne
    { code: "GBP", symbole: "£" }, // Livre sterling
    { code: "GEL", symbole: "₾" }, // Lari
    { code: "GGP", symbole: "£" }, // Livre de Guernesey
    { code: "GHS", symbole: "₵" }, // Cedi
    { code: "GIP", symbole: "£" }, // Livre de Gibraltar
    { code: "GMD", symbole: "D" }, // Dalasi
    { code: "GNF", symbole: "FG" }, // Franc guinéen
    { code: "GTQ", symbole: "Q" }, // Quetzal
    { code: "GYD", symbole: "$" }, // Dollar guyanien
    { code: "HKD", symbole: "$" }, // Dollar de Hong Kong
    { code: "HNL", symbole: "L" }, // Lempira
    { code: "HRK", symbole: "kn" }, // Kuna
    { code: "HTG", symbole: "G" }, // Gourde
    { code: "HUF", symbole: "Ft" }, // Forint
    { code: "IDR", symbole: "Rp" }, // Rupiah
    { code: "ILS", symbole: "₪" }, // Shekel israélien
    { code: "IMP", symbole: "£" }, // Livre de l'île de Man
    { code: "INR", symbole: "₹" }, // Roupie indienne
    { code: "IQD", symbole: "ع.د" }, // Dinar irakien
    { code: "IRR", symbole: "﷼" }, // Rial iranien
    { code: "ISK", symbole: "kr" }, // Couronne islandaise
    { code: "JEP", symbole: "£" }, // Livre de Jersey
    { code: "JMD", symbole: "$" }, // Dollar jamaïcain
    { code: "JOD", symbole: "د.ا" }, // Dinar jordanien
    { code: "JPY", symbole: "¥" }, // Yen
    { code: "KES", symbole: "Sh" }, // Shilling kényan
    { code: "KGS", symbole: "с" }, // Som
    { code: "KHR", symbole: "៛" }, // Riel
    { code: "KID", symbole: "$" }, // Dollar kiribatien
    { code: "KMF", symbole: "CF" }, // Franc comorien
    { code: "KRW", symbole: "₩" }, // Won sud-coréen
    { code: "KWD", symbole: "د.ك" }, // Dinar koweïtien
    { code: "KYD", symbole: "$" }, // Dollar des îles Caïmans
    { code: "KZT", symbole: "₸" }, // Tenge
    { code: "LAK", symbole: "₭" }, // Kip
    { code: "LBP", symbole: "ل.ل" }, // Livre libanaise
    { code: "LKR", symbole: "Rs" }, // Roupie srilankaise
    { code: "LRD", symbole: "$" }, // Dollar libérien
    { code: "LSL", symbole: "L" }, // Loti
    { code: "LYD", symbole: "ل.د" }, // Dinar libyen
    { code: "MAD", symbole: "د.م." }, // Dirham marocain
    { code: "MDL", symbole: "L" }, // Leu moldave
    { code: "MGA", symbole: "Ar" }, // Ariary malgache
    { code: "MKD", symbole: "ден" }, // Dinar macédonien
    { code: "MMK", symbole: "K" }, // Kyat
    { code: "MNT", symbole: "₮" }, // Tugrik
    { code: "MOP", symbole: "P" }, // Pataca
    { code: "MRU", symbole: "UM" }, // Ouguiya
    { code: "MUR", symbole: "₨" }, // Roupie mauricienne
    { code: "MVR", symbole: "Rf" }, // Rufiyaa
    { code: "MWK", symbole: "MK" }, // Kwacha
    { code: "MXN", symbole: "$" }, // Peso mexicain
    { code: "MYR", symbole: "RM" }, // Ringgit
    { code: "MZN", symbole: "MT" }, // Metical
    { code: "NAD", symbole: "$" }, // Dollar namibien
    { code: "NGN", symbole: "₦" }, // Naira
    { code: "NIO", symbole: "C$" }, // Cordoba
    { code: "NOK", symbole: "kr" }, // Couronne norvégienne
    { code: "NPR", symbole: "₨" }, // Roupie népalaise
    { code: "NZD", symbole: "$" }, // Dollar néo-zélandais
    { code: "OMR", symbole: "ر.ع." }, // Rial omanais
    { code: "PAB", symbole: "B/." }, // Balboa
    { code: "PEN", symbole: "S/." }, // Sol péruvien
    { code: "PGK", symbole: "K" }, // Kina
    { code: "PHP", symbole: "₱" }, // Peso philippin
    { code: "PKR", symbole: "₨" }, // Roupie pakistanaise
    { code: "PLN", symbole: "zł" }, // Zloty
    { code: "PYG", symbole: "₲" }, // Guarani
    { code: "QAR", symbole: "ر.ق" }, // Rial qatari
    { code: "RON", symbole: "lei" }, // Leu roumain
    { code: "RSD", symbole: "дин." }, // Dinar serbe
    { code: "RUB", symbole: "₽" }, // Rouble russe
    { code: "RWF", symbole: "FRw" }, // Franc rwandais
    { code: "SAR", symbole: "ر.س" }, // Riyal saoudien
    { code: "SBD", symbole: "$" }, // Dollar des Îles Salomon
    { code: "SCR", symbole: "₨" }, // Roupie seychelloise
    { code: "SDG", symbole: "ج.س." }, // Livre soudanaise
    { code: "SEK", symbole: "kr" }, // Couronne suédoise
    { code: "SGD", symbole: "$" }, // Dollar de Singapour
    { code: "SHP", symbole: "£" }, // Livre de Sainte-Hélène
    { code: "SLL", symbole: "Le" }, // Leone
    { code: "SOS", symbole: "Sh" }, // Shilling somalien
    { code: "SRD", symbole: "$" }, // Dollar surinamais
    { code: "SSP", symbole: "£" }, // Livre sud-soudanaise
    { code: "STN", symbole: "Db" }, // Dobra
    { code: "SYP", symbole: "£" }, // Livre syrienne
    { code: "SZL", symbole: "L" }, // Lilangeni
    { code: "THB", symbole: "฿" }, // Baht
    { code: "TJS", symbole: "ЅМ" }, // Somoni
    { code: "TMT", symbole: "m" }, // Manat turkmène
    { code: "TND", symbole: "د.ت" }, // Dinar tunisien
    { code: "TOP", symbole: "T" }, // Pa'anga
    { code: "TRY", symbole: "₺" }, // Livre turque
    { code: "TTD", symbole: "$" }, // Dollar de Trinité-et-Tobago
    { code: "TVD", symbole: "$" }, // Dollar de Tuvalu
    { code: "TWD", symbole: "NT$" }, // Nouveau dollar taïwanais
    { code: "TZS", symbole: "Sh" }, // Shilling tanzanien
    { code: "UAH", symbole: "₴" }, // Hryvnia
    { code: "UGX", symbole: "Sh" }, // Shilling ougandais
    { code: "USD", symbole: "$" }, // Dollar américain
    { code: "UYU", symbole: "$U" }, // Peso uruguayen
    { code: "UZS", symbole: "сўм" }, // Soum ouzbek
    { code: "VES", symbole: "Bs.S" }, // Bolivar souverain
    { code: "VND", symbole: "₫" }, // Dong
    { code: "VUV", symbole: "Vt" }, // Vatu
    { code: "WST", symbole: "T" }, // Tala
    { code: "XAF", symbole: "FCFA" }, // Franc CFA BEAC
    { code: "XCD", symbole: "$" }, // Dollar des Caraïbes orientales
    { code: "XDR", symbole: "SDR" }, // Droits de tirage spéciaux
    { code: "XOF", symbole: "CFA" }, // Franc CFA BCEAO
    { code: "XPF", symbole: "₣" }, // Franc CFP
    { code: "YER", symbole: "﷼" }, // Rial yéménite
    { code: "ZAR", symbole: "R" }, // Rand
    { code: "ZMW", symbole: "K" }, // Kwacha zambien
    { code: "ZWL", symbole: "$" } // Dollar zimbabwéen
];

