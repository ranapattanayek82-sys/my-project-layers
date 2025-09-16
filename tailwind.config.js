/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      },
          screens : {
            'verySmall' : {'max' : "420px"},
            'small' : {'max' :"550px"},
            'medium' :{'max' :"768px"},
            'large': {'max':'1070px'},
            'midl':{'min':'770px','max':'1250px'},
        },
            scrollbars : {

        }
      
  },
  plugins: [],
}



