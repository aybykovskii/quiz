import { makeStyles } from "@material-ui/styles";

export const useStyle = makeStyles({
  body : {
    height: '100vh',
    background: 'linear-gradient(90deg, #b9deed, #efefef)',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    boxSizing: 'border-box',
    transition: '0.3s',
  },
  wrapper :{
    display: 'flex',
    margin: 'auto',
    padding: '20px',
    width: '500px',
    height: 'auto',
    border: '2px solid #fff',
    flexDirection: 'column',
    textAlign: 'center',
    boxSizing: 'border-box',
  },
  "wrapper > hr" : {
    width: '420px',
    background: '#000',
  }, 
  subtitle : {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
    padding: '0',
  },
  title : {
    margin: '0',
    marginBottom: '10px',
  }
})
