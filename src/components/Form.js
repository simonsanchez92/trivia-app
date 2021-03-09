import React, {useState, useEffect} from 'react'


import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

import Box from '@material-ui/core/Box';



const Form = (props) => {

    const[options, setOptions] = useState([]);
    const [selected, setSelected] = useState('');
    const [question, setQuestion] = useState();
    
    
    useEffect(async ()=>{
      const quest = await props.current;
      setQuestion(quest);
      console.log(question)
    },[])

    const handleChange = (e)=>{
        console.log(e.target.value)
        setSelected(e.target.value)
       }

    return (
        <Box component="form"
          
             my={4}
             
             display="flex"
             flexDirection="column"
             justifyContent="center"
             alignItems="flex-start"
             borderRadius="4px"
             className="form">
    
    <Box 
         boxShadow={1}
         width={300}
         maxWidth="100%"
         mb={2}
         px={6}
         py={3}
         display="flex"
         flexDirection="column"
        justifyContent="center">
       
       <Box py={2} px={1} display="flex" width="100%" alignItems="flex-start">
       <FormControl  size='small' >
      <FormLabel component="legend"
                 color="primary"
                 filled={true}>Only one is true...</FormLabel>
      
  <RadioGroup  aria-label="gender" name="gender1" value={selected} onChange={(e)=> handleChange(e)}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        <FormControlLabel value="disabled" control={<Radio />} label="(Disabled option)" />
  </RadioGroup>

    </FormControl>
       </Box>
      

    <Button variant="contained" color="primary"  >Submit</Button>

    </Box>
  
        </Box>
    )
}

export default Form;
