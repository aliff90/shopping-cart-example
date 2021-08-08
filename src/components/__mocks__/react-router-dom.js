module.exports = {
    ...jest.requireActual("react-router-dom"),
    // useParams: jest.fn().mockReturnValue({id: 1})
    useParams: () => ({id: 1})
}