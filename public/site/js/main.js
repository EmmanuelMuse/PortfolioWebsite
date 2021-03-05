Vue.component('project-item', {
    props:['project'],
    template: '<li>{{ project.title }}</li>'
  })

var projectList = new Vue({
    el: '#my-projects',
    data: {
      projectsList: [
            { title: 'Staff & Resource Management Web Application', desc:'' },
            { title: 'Inventory Management System Web Application', desc:'' },
            { title: 'Automated ROI Calculator Web Application', desc:'' },
            { title: 'Atlanta Crime Data Visualization', desc:'' }
      ]
    }
  })

