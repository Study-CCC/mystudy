import Vue from 'vue'
import { Button,Input,FormItem,Form,Message,Tree,Dropdown,Select,Option,DropdownMenu,DropdownItem,Container,Header,Aside,Main,Menu,MenuItem,Tag,Dialog,MessageBox,Tooltip,Submenu,Pagination,Switch,Breadcrumb,BreadcrumbItem,Card,Row,Col,Table,TableColumn} from 'element-ui'
Vue.use(Button)
Vue.use(Form)
Vue.use(Input)
Vue.use(FormItem)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(Switch)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Tag)
Vue.use(Tooltip)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(Option)
Vue.use(Select)
Vue.use(DropdownItem)
Vue.use(Tree)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm