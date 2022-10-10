import Vue from 'vue'

import { Tabbar, TabbarItem, NavBar, PullRefresh, Cell, CellGroup, Icon, Grid, GridItem, Image as VanImage, Dialog, RadioGroup, Radio, Calendar, Area, Field, Uploader } from 'vant'
import 'vant/lib/index.css'

const components = [Tabbar, TabbarItem, NavBar, PullRefresh,
  Cell,
  CellGroup,
  Icon,
  Grid,
  GridItem,
  VanImage,
  Dialog,
  RadioGroup,
  Radio,
  Calendar,
  Area,
  Field,
  Uploader
]

components.forEach((component) => {
  Vue.use(component)
})
