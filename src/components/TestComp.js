function TestComp(props) {

    return (
        <div>
            <h1>THIS IS A TEST</h1>
            <input type="text"
            value={props.test}
                onChange={props.handleTest} />
        </div>
    )
}
export default TestComp;