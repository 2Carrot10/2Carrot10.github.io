/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
			"extend": {
			colors: {
				"tnbg": "#1a1b26",
				"tnfg": "#c0caf5",
				"tnbgalt": "#414868",
				"tnbgalthigh": "#9aa5ce",
				"tnhighlight" : "#5a3e8e",
				// "tnblue" : "#c0caf5"
				"tnblue" : "#2ac3de"
			},
			boxShadow: {
        'w': '0 0px 5px 1px rgba(255, 255, 255, .8)',
      },
      backgroundImage: {
        'cross-pattern': "url(../images/background.svg)"
      }
		},
  },
  plugins: [],
}

