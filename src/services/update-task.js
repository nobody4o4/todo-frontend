export const UpdateTask = async ({ taskId, taskName, taskDescription, taskStatus }) => {

    try {
        const response = await fetch(`import.meta.env.VITE_API_URL/tasks/update/${taskId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                taskName,
                taskDescription,
                taskStatus
            })
        })
        return await response.json()
    } catch (err) {
        console.log(err)

    }
}