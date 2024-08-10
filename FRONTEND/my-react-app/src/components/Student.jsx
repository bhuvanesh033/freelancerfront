const Student=(props)=>{
    console.log(props);
    return(
    <>
    <div>Student Name:{props.student.name}</div>
    <div>Student Age:{props.student.age}</div>
    </>
    ) 
}
export default Student;