const array = ["React", "ReactNative", "Nodejs"]
const Course = () => {
    return (
        <section>
            <h2>Course names</h2>
            <ul>
                {array.map((i) => (<li key={i}>{i}</li>))}
            </ul>
        </section>
    )
}
export default Course