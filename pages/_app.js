const MyApp = ({Component, pageProps}) => (
  <>
    <Component {...pageProps} />
    <style jsx global> {`
      #__next {
        display: flex;
        flex-direction: column;
      }

      body {
        margin: 0;
        padding: 0;
        min-width: 100px;
      }

      p {
        margin: 0;
      }

      h1 {
        margin: 0;
      }

      header {
        min-height: 50px;
        background-color: lightgray;
      }

      main {
        min-height: 200px;
      }

      footer {
        min-height: 200px;
        background-color: lightgray;
      }

      @media screen and (max-width: 768px) {
        footer {
          background-color: gray;
        }

        header {
          background-color: gray;
        }

        main {
          background-color: lightgray;
        }
      }
    `} </style>
  </>
)

export default MyApp