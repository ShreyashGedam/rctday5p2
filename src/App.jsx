import { Center, Text , Input , Button , Stack} from '@chakra-ui/react'
import "./App.css"

function App() {
  
  
 
  
  return (
    <div className='container'>
      <Center>
      <Text as='h1' fontSize='5xl'>Find the Right</Text>
      </Center>
      <Center>
      <Text color='tomato' style={ {marginRight : "10px"}} fontSize='5xl'>Four-Day</Text>
      <Text fontSize='5xl'>week job</Text> 
      </Center>
      <Center>
      <Input  style={ { marginTop:"10px" , marginBottom : "10px" }} htmlSize={5}  width='320px' placeholder='Type Job tyle or Keyboard' />
      </Center>
      <Center >  
      <Stack spacing={4} direction='row' align='center' >
      <Button colorScheme='teal' size='md'>Remote</Button>
      <Button colorScheme='teal' size='md'>Tech</Button>
      <Button colorScheme='teal' size='md'>Marketting</Button>
      </Stack>
      </Center>
      
      {/* <div style={ { display: "flex"}}>
      <Text style={ {marginRight : "10px"}} fontSize='5xl'>Four-Day</Text>
      <Text fontSize='5xl'>week job</Text>

      </div> */}
      

    </div>
    
    
  )
}

export default App
