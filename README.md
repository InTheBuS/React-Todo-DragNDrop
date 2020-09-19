# Что я использовал

React, redux, react-beautiful-dnd.<br/>
Search input реализован через debounce функцию с задержкой в 500 мс.<br/>
Контейнеры являются droppable area, а сами задачи можно перетаскивать между контейнерами.<br/>
Уникальные ID я получаю благодаря функции, которая генерирует случайные уникальные ключи.<br/>

# TODO application

This is a simple TODO application that I tried to create for my GIT profile.<br/>
In this application you can: 
- Create and delete container
- Create, delete and edit tasks
- Hide completed tasks
- Drag a task from container and put it to another one
- Search a task by entering keywords in the search bar

## How to create or delete a container

If you want to create a container, you should click on the top middle button. If you want to delete a container, you should click to the bottom button of the container. <br/>
Create container button:
![createBefore](https://sun1-19.userapi.com/JNRSH9fFSpzeYuUTYs2QXmJ8t0_slhYzFcKHAg/-4-r30FO7xI.jpg)
Creating first container:
![createAfter](https://sun1-89.userapi.com/qAvgZ7lXYnVsn1ZV-pGB8O198T85w6lBEP6jGA/vDNn9USi8iA.jpg)
Creating second container:
![createAfterTwo](https://sun1-99.userapi.com/287NGEfVuuS0VCwjDrhPajSvVR9GvfmFMZSTMA/c6DOt-gjfXE.jpg)
Delete container button:
![deleteContainer](https://sun9-21.userapi.com/dU5Lu1BfKpYNCB1cYKJaEUSklxY0OADUUlXVbQ/9s7XJ8eDj9g.jpg)
Deleting container:
![deletedContainer](https://sun9-32.userapi.com/qAvgZ7lXYnVsn1ZV-pGB8O198T85w6lBEP6jGA/vDNn9USi8iA.jpg)

## How to create, delete or edit a task

How to create, edit and delete a task:<br/>
Create task button:
![createTaskButton](https://sun9-17.userapi.com/CGPz12jOTH0-nYv40ufWApmgxs68JSudxO_vuw/p94Yze8Y8Ro.jpg)
Modal window for a new task with a submit button:
![createTaskModal](https://sun9-22.userapi.com/6A28HH7fmlmx38evOEM816KzFFvtYaDrlnAAcw/HdS6lcGcAYI.jpg)
New task created: 
![createTaskResult](https://sun9-27.userapi.com/Y3RMKIR0S1kK7S9-ehVqFLifWzQmYP661okXuw/zmgJTvemdrE.jpg)
To edit a task u need to press edit button:
![editTaskButton](https://sun9-37.userapi.com/C16YlEVXsCCk8qZJkQiVBoFEPQeKRDEwHNvgYQ/rfxdvxWJjPQ.jpg)
Here you can change your task tittle and body: 
![editTaskModal](https://sun9-40.userapi.com/eRb1ohXGYQQ8bsFdH0WnbYZWnqexdFNAGNIP5g/7DA3TUMMcp0.jpg)
After changing the tittle and the body, we can submit our changed task:
![editedTask](https://sun1-16.userapi.com/hKYmK8YPbzTb6_5-qJmJZUOLcPUf6EsS_29FBg/KfOlIfy0t4w.jpg)
And if you want to delete a task you need to press a delete button:
![deleteTaskButton](https://sun9-72.userapi.com/7rXraIu-vdhtAG-5b7UNwQrjEmH88Aj4ktngYA/zccWZ3Cr4_w.jpg)
And that's our result:
![deleteTaskResult](https://sun9-26.userapi.com/287NGEfVuuS0VCwjDrhPajSvVR9GvfmFMZSTMA/c6DOt-gjfXE.jpg)

## Modal window
If you want to close the modal window without any changes or submits, all you need is press and ESC button 
on your keyboard or click outside with your mouse:
![modalWindow](https://sun9-59.userapi.com/CDMIyk8yTcsiHeMZmzl4UcD9KPlFaW-mfLEnHQ/fArRBGyXICE.jpg)
The result of pressing outside this modal window or pressing ESC on a keyboard:
![modalClosed](https://sun9-26.userapi.com/287NGEfVuuS0VCwjDrhPajSvVR9GvfmFMZSTMA/c6DOt-gjfXE.jpg)

## Search input
This search input filtering tasks and showing tasks which one has the text from search input in their task tittle or body.<br/>
Search input empty:
![searchInputEmpty](https://sun9-52.userapi.com/BO7_Q7FugADVVuIzciC74GOtZXL1kbh4cfT3Tw/UfBTokpUtOQ.jpg)
Search input with some text:
![searchInputWithSomeText](https://sun9-53.userapi.com/zQ5V5dpznAcLM5N1r4L0DYB-Yie7oOpUfDkwbQ/JmxuDJ9tSZs.jpg)

## Make task completed
It's kinda easy to hide completed tasks. You need to made your checkbox checked first, 
then press the button that hides completed tasks.<br/>
Here is our button to make our task completed:
![taskNotCompleted](https://sun1-93.userapi.com/jBdbUc44sMWi9WEN5tEbiYsm_gYP5nk1RjW_pQ/yD0Vachs9fc.jpg)
Now it looks more like completed:
![taskCompleted](https://sun9-47.userapi.com/RckABiEAJMptUBgGWC_EPrJfjEoy3JK8VenTOA/lND1qMZPSE8.jpg) <br/>
Click on it once again to make this task not completed again or delete if you don't need this task anymore !

## Hide completed
Now we have completed tasks, but we don't want to see them right now. To hide completed tasks 
you need to click the button Hide completed.<br/>
Here is our button to hide completed tasks in a single container:
![taskShowAll](https://sun9-74.userapi.com/nFs-a2cX0O01rP79VQQkC96WV7oprgXv8g5-JA/66MYrD7u6SA.jpg)
Result of clicking on it:
![taskHideCompleted](https://sun9-70.userapi.com/JVq-HLZVu3j5ONf_kFo-hUnaXrnYZEbjo1T5Vg/0A_zPN3lxbY.jpg) <br/>
Click on it once again to see all tasks in this container ! 

## Drag and drop our tasks
You can take your task and put it in another container.<br/>
Grab the task by holding left mouse button:
![grabTaskOne](https://sun9-28.userapi.com/zX_QVMOIeBd4SC_Jn--HSXWPHRmYYmGZZ3PTbA/7sVFWDQMk0U.jpg)
Let's do it once again:
![grabTaskTwo](https://sun9-3.userapi.com/08DCeX16qo0CB-9WzGghVlocS93UwOWjgb7QAg/4KzuusU_8DY.jpg)
Result:
![grabTaskResult](https://sun9-49.userapi.com/xrUftykgd1p_iI8ghjOuw8SRK4SYGijRq1dQ3g/jgbAGAORvD4.jpg)
You can put your task in another container or in a different place in the same container !







