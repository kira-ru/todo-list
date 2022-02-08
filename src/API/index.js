import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://localhost:3001/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

const API = {
    getFolders () {
        return instance.get('lists?_expand=color&_embed=tasks')
            .then(response => response.data)
    },

    addFolder (folder) {
        return instance.post('lists', folder)
            .then(response => response.data)
            .catch(error => console.log(error));
    },

    deleteFolder (folderID) {
        return instance.delete(`lists/${folderID}`)
    },

    updateFolder (folderID, newName) {
      return instance.patch(`lists/${folderID}`, {name: newName})
          .catch(() => alert('Ошибка'))
    },

    getColors () {
        return instance.get('colors')
            .then(response => response.data)
    },

    addTask (task) {
        return instance.post('tasks', task)
            .then(response => response.data)
            .catch(() => alert('Не удалось добавить задачу'))
    },

    deleteTask (taskID) {
        return instance.delete(`tasks/${taskID}`)
            .then(response => response.data)
            .catch(() => alert('Не удалось удалить задачу'))
    },

    updateTask (taskID, newText) {
        return instance.patch(`tasks/${taskID}`, {text: newText})
            .catch(() => alert('Ошибка при изменении задачи'))
    }

}

export default API;