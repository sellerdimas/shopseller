NewCollections = new orion.collection('newCollections', {
  singularName: 'New collections', // The name of one of these items
  pluralName: 'New collections', // The name of more than one of these items
  link: {
    title: 'New collections' 
  },

  tabular: {

    columns: [
      { 
        data: "tovarHeader", 
        title: "Header" 
      },
       { 
        data: "firma", 
        title: "Company" 
      },
       { 
        data: "akcii", 
        title: "akcii" 
      },
       { 
        data: "price", 
        title: "Price" 
      },
      { 
        data: "color1", 
        title: "color1" 
      }, 
      { 
        data: "color2", 
        title: "color2" 
      },
      { 
        data: "color3", 
        title: "color3" 
      },
      { 
        data: "color4", 
        title: "color4" 
      },
      { 
        data: "color5", 
        title: "color5" 
      },
      { 
        data: "color6", 
        title: "color6" 
      },
      { 
        data: "color7", 
        title: "color7" 
      },
      { 
        data: "color8", 
        title: "color8" 
      },
      { 
        data: "color9", 
        title: "color9" 
      },
      { 
        data: "color10", 
        title: "color10" 
      },  
      { 
        data: "sByst", 
        title: "sByst" 
      },
      { 
        data: "mByst", 
        title: "mByst" 
      },
      { 
        data: "lByst", 
        title: "lByst" 
      },
      { 
        data: "xlByst", 
        title: "xlByst" 
      },
      { 
        data: "sTrysu", 
        title: "sTrysu" 
      },
      { 
        data: "mTrysu", 
        title: "mTrysu" 
      },
      { 
        data: "lTrysu", 
        title: "lTrysu" 
      },
      { 
        data: "xlTrysu", 
        title: "xlTrysu" 
      },
      { 
        data: "sale", 
        title: "sale" 
      },
      { 
        data: "news", 
        title: "new" 
      },
      { 
        data: "har1", 
        title: "har1" 
      },
      { 
        data: "har2", 
        title: "har2" 
      },
      { 
        data: "har3", 
        title: "har3" 
      },
      { 
        data: "har4", 
        title: "har4" 
      },
      { 
        data: "har5", 
        title: "har5" 
      },
      { 
        data: "har6", 
        title: "har6" 
      },
      { 
        data: "har7", 
        title: "har7" 
      },
      { 
        data: "har8", 
        title: "har8" 
      },
      { 
        data: "imgSrc", 
        title: "Main src" 
      },
      { 
        data: "smallImg1", 
        title: "Img1" 
      },
      { 
        data: "smallImg2", 
        title: "Img2" 
      },
      { 
        data: "smallImg3", 
        title: "Img3" 
      },
      { 
        data: "smallImg4", 
        title: "Img4" 
      },
      { 
        data: "smallImg5", 
        title: "Img5" 
      },
    
    ]
  }
});



NewCollections.attachSchema(new SimpleSchema({
   tovarHeader: {
    type: String,
    optional: false,
    label: 'tovarHeader',
  },
   firma: {
    type: String,
    optional: true,
    label: 'firma',
  },
   akcii: {
    type: String,
    optional: true,
    label: 'akcii',
  },
  price: {
    type: String,
    optional: false,
    label: 'price',
  },
   color1: {
    type: String,
    optional: true,
    label: 'color1',
  },
     color2: {
    type: String,
    optional: true,
    label: 'color2',
  },
       color3: {
    type: String,
    optional: true,
    label: 'color3',
  },
       color4: {
    type: String,
    optional: true,
    label: 'color4',
  },
       color5: {
    type: String,
    optional: true,
    label: 'color5',
  },
       color6: {
    type: String,
    optional: true,
    label: 'color6',
  },
       color7: {
    type: String,
    optional: true,
    label: 'color7',
  },
       color8: {
    type: String,
    optional: true,
    label: 'color8',
  },
       color9: {
    type: String,
    optional: true,
    label: 'color9',
  },
       color10: {
    type: String,
    optional: true,
    label: 'color10',
  },
  sByst: {
    type: String,
    optional: true,
    label: 'SByst',
  },
  mByst: {
    type: String,
    optional: true,
    label: 'MByst',
  },
  lByst: {
    type: String,
    optional: true,
    label: 'LByst',
  },
  xlByst: {
    type: String,
    optional: true,
    label: 'XLByst',
  },
  sTrysu: {
    type: String,
    optional: true,
    label: 'STrysu',
  },
  mTrysu: {
    type: String,
    optional: true,
    label: 'MTrysu',
  },
  lTrysu: {
    type: String,
    optional: true,
    label: 'LTrysu',
  },
  xlTrysu: {
    type: String,
    optional: true,
    label: 'XLTrysu',
  },
  sale: {
    type: String,
    optional: true,
    label: 'sale',
  },
  news: {
    type: String,
    optional: true,
    label: 'new',
  },
  har1: {
    type: String,
    optional: true,
    label: 'har1',
  },
  har2: {
    type: String,
    optional: true,
    label: 'har2',
  },
  har3: {
    type: String,
    optional: true,
    label: 'har3',
  },
  har4: {
    type: String,
    optional: true,
    label: 'har4',
  },
  har5: {
    type: String,
    optional: true,
    label: 'har5',
  },
  har6: {
    type: String,
    optional: true,
    label: 'har6',
  },
  har7: {
    type: String,
    optional: true,
    label: 'har7',
  },
  har8: {
    type: String,
    optional: true,
    label: 'har8',
  },
    imgSrc: {
    type: String,
    optional: false,
    label: 'imgSrc',
  },
  smallImg1: {
    type: String,
    optional: true,
    label: 'Img1',
  },
   smallImg2: {
    type: String,
    optional: true,
    label: 'Img2',
  },
   smallImg3: {
    type: String,
    optional: true,
    label: 'Img3',
  },
   smallImg4: {
    type: String,
    optional: true,
    label: 'Img4',
  },
   smallImg5: {
    type: String,
    optional: true,
    label: 'Img5',
  },
  smallImg2: {
    type: String,
    optional: true,
    label: 'Img2',
  },
   tableSize: {
    type: String,
    optional: true,
    label: 'tableSize',
  }


}));


Orders = new orion.collection('Orders', {
  singularName: 'Orders', // The name of one of these items
  pluralName: 'Orders', // The name of more than one of these items
  link: {
    title: 'Orders' 
  },

  tabular: {

    columns: [
       { 
        data: "header", 
        title: "model" 
      },
       { 
        data: "firma", 
        title: "brend" 
      },
       { 
        data: "price", 
        title: "price" 
      },
       {
        data: "sizeByst", 
        title: "sizeByst" 
      },
       { 
        data: "sizeTrysu", 
        title: "sizeTrysu" 
      },
       { 
        data: "quantity", 
        title: "quantity" 
      },
      { 
        data: "color", 
        title: "color" 
      },
      { 
        data: "name", 
        title: "name" 
      },
      { 
        data: "number", 
        title: "number" 
      },
      { 
        data: "date", 
        title: "date"
      },
      { 
        data: "obrabotan", 
        title: "obrabotan"
      }
    ]
  }
});

Orders.attachSchema(new SimpleSchema({
   header: {
    type: String,
    optional: false,
    label: 'Model',
  },
   firma: {
    type: String,
    optional: true,
    label: 'firma',
  },
   price: {
    type: String,
    optional: true,
    label: 'price',
  },
  sizeByst: {
    type: String,
    optional: true,
    label: 'sizeByst',
  },
  sizeTrysu: {
    type: String,
    optional: true,
    label: 'sizeTrysu',
  },
   quantity: {
    type: String,
    optional: true,
    label: 'quantity',
  },
  color: {
    type: String,
    optional: true,
    label: 'color',
  },
   name: {
    type: String,
    optional: true,
    label: 'name',
    max: 20,
  },
   number: {
    type: String,
    optional: false,
    label: 'number',
    max: 20,
  },
   date: {
    type: String,
    optional: false,
    label: 'date',
  },
   obrabotan: {
    type: String,
    optional: false,
    label: 'obrabotan',
  }
}));


Calls = new orion.collection('Calls', {
  singularName: 'Calls', // The name of one of these items
  pluralName: 'Calls', // The name of more than one of these items
  link: {
    title: 'Calls' 
  },

  tabular: {

    columns: [
       { 
        data: "name", 
        title: "name" 
      },
       { 
        data: "number", 
        title: "number" 
      },
       { 
        data: "email", 
        title: "email" 
      },
      { 
        data: "date", 
        title: "date"
      }
    ]
  }
});

Calls.attachSchema(new SimpleSchema({
   name: {
    type: String,
    optional: false,
    label: 'name',
  },
   number: {
    type: String,
    optional: false,
    label: 'number',
  },
   email: {
    type: String,
    optional: true,
    label: 'email',
  },
   date: {
    type: String,
    optional: false,
    label: 'date',
  }
}));