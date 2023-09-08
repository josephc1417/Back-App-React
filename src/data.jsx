import tour1 from "./images/tour-1.jpeg"
import tour2 from "./images/tour-2.jpeg"
import tour3 from "./images/tour-3.jpeg"
import tour4 from "./images/tour-4.jpeg"
export const PageLink =  [
    {id: 1, href:'#home', text:"home"},    
    {id: 2, href:'#about', text:"about"},
    {id: 3, href:'#services', text:"services"},
    {id: 4, href:'#tours', text:"tours"},

  ]

  export const SocialLinks =[
    {id: 1, href:'https://www.facebook.com', target:'_blank', i:'fab fa-facebook'},
    {id: 2, href:'https://www.twitter.com', target:'_blank', i:'fab fa-twitter'},
    {id: 3, href:'https://www.squarespace.com', target:'_blank', i:'fab fa-squarespace'},
]

export const Articles = [
  {id:1, icon:'fas fa-wallet fa-fw', title:'saving money', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores officia.'},
  {id:2, icon:'fas fa-tree fa-fw', title:'endless hiking', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores officia.'},
  {id:3, icon:'fas fa-socks fa-fw', title:'amazing comfort', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores officia.'},
]

export const Cards = [
  {id:1,img:tour1, date:"august 26th, 2020", title:"Tibet Adventure",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.", icon:"fas fa-map",ft:"china",ft1:"6 days",ft2:"from $2100"},
  {id:2,img:tour2, date:"october 1th, 2020", title:"best of java",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.", icon:"fas fa-map",ft:"indonesia",ft1:"11 days",ft2:"from $1400"},
  {id:3,img:tour3, date:"september 15th, 2020", title:"explore hong kong",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.", icon:"fas fa-map",ft:"hong kong",ft1:"8 days",ft2:"from $5000"},
  {id:4,img:tour4, date:"december 5th, 2019", title:"kenya highlights",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.", icon:"fas fa-map",ft:"kenya",ft1:"20 days",ft2:"from $3300"},
]