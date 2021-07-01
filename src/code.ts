import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { interval } from 'rxjs/Observable/interval'
import 'rxjs/add/operator/skipUntil'

var observable1 = Observable.create((data: any) => {
  var i = 1
  setInterval(() => {
    data.next(i++)
  }, 1000)
})

var observable2 = new Subject()

setTimeout(() => {
  observable2.next('헤이!!')
}, 3000)

var newObs = observable1.skipUntil(observable2)

newObs.subscribe((x: any) => {
  addItem(x)
})

function addItem(출력내용: any) {
  var node = document.createElement('li')
  var textnode = document.createTextNode(출력내용)
  node.appendChild(textnode)
  document.getElementById('output').appendChild(node)
}
