import {app} from 'https://unpkg.com/hyperapp@2.0.4'

app({
    view: () => 'hello world',
    node: document.getElementById('app')
})