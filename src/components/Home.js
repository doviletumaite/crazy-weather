import { useState } from "react"
import { Col, Form } from "react-bootstrap";
import { useDispatch } from "react-redux"
import { fetchData } from "../store/actions";

const Home = () => {
    const [query, setQuery] = useState("")
    
    const dispatch = useDispatch()

    const endPoint = process.env.REACT_APP_API_BASE_URL + query + "&appid=" + process.env.REACT_APP_API_KEY
    console.log("baseEndpoint", endPoint)
    const handleChange = (e)=>{
        setQuery(e.target.value)
        console.log("baseEndpoint", query)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(fetchData(endPoint))
    }
    return(
        <div>
          <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="Search a City!" />
          </Form>
        </Col>
        </div>
    )
}
export default Home