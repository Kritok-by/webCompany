import {burgerToggle} from "./burgerToggle";
import {brands, goods, typeSelect} from "./db";
import {Goods} from "./goods";
import {Select} from "./select";


const type = new Select('.type',{
  placeholder: 'Любого логотипа',
  data: typeSelect
});
const brand = new Select('.brand', {
  placeholder: 'Любого бренда',
  data: brands
})
const photos = new Goods('.goods', goods)

document.querySelector('.burger').addEventListener('click', ()=>burgerToggle('.modal'))