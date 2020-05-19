'use stric'

const courses = [
    {
        _id: "anyID",
        title: "Mi titulo 1",
        teacher: "mi profesor",
        description: "una descripcion",
        topic: "programacion"
    },
    {
        _id: "anyID",
        title: "Mi titulo 2",
        teacher: "mi profesor",
        description: "una descripcion",
        topic: "programacion"
    },
    {
        _id: "anyID",
        title: "Mi titulo 3",
        teacher: "mi profesor",
        description: "una descripcion",
        topic: "programacion"
    }
]

module.exports = {
    Query: {
        getCourses: () => {
            return courses
        },
        getCourse: (root, args) => {
            const course = courses.filter(course => course._id === args.id)
            return course.pop()
        }
    }
}