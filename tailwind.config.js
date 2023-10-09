
tailwind.config = {
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('./images/banner.jpg')",
        project: "url('images/project.png')",
        overlay: 'linear-gradient(40deg, #060606 16.68%, rgba(0,0,0,0.2) 96.44%);',
        maps: "url('images/maps.png')",
      },
      colors: {
        clifford: "#da373d",
      },
      maxWidth: {
        container: "1920px",
      },
      fontFamily: {
        poppinse: "Poppins, sans-serif;",
      },
    },
  },
};