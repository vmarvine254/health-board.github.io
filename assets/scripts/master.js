var overlay = document.querySelector(".overlay");
var font_family = getComputedStyle(document.documentElement).getPropertyValue('--font-family');

function sidebar() {
  let menu_icon = document.querySelector(".menu-icon");
  let sidebar_wrapper = document.querySelector(".sidebar-wrapper");
  let sidebar_width = "300px";

  menu_click(menu_icon, sidebar_wrapper, sidebar_width);
  close_overlay_x(sidebar_wrapper);
}

sidebar();

function activity_drawer() {
  let activity = document.querySelector(".activity");
  let activity_drawer = document.querySelector(".activity-drawer");
  let close_activity = document.querySelector(".close-activity");
  let activity_width = "350px";

  activity_click(activity, activity_drawer, activity_width);
  close_overlay_x(activity_drawer);
  close_icon(close_activity, activity_drawer);
}

activity_drawer();

function menu_click(menu_icon, sidebar_wrapper, sidebar_width) {
  menu_icon.addEventListener("click", () => {
    overlay.style.transitionDelay = "0s";
    overlay.style.width = "100%";
    sidebar_wrapper.style.width = sidebar_width;
  })
}

function activity_click(activity, activity_drawer, activity_width) {
  activity.addEventListener("click", () => {
    overlay.style.transitionDelay = "0s";
    overlay.style.width = "100%";
    activity_drawer.style.width = activity_width;
  })
}

function close_overlay_x(winx) {
  overlay.addEventListener("click", () => {
    overlay.style.transitionDelay = "0.5s";
    overlay.style.width = "0%";
    winx.style.width = "0%";
  })
}

function close_icon(x, winx) {
  x.addEventListener("click", () => {
    overlay.style.transitionDelay = "0.5s";
    overlay.style.width = "0%";
    winx.style.width = "0%";
  })
}

function activity_tab() {
  let activity_links = document.querySelectorAll(".activity-link");
  let activity_infos = document.querySelectorAll(".activity-info")

  activity_tab_data(activity_links, activity_infos);
  activity_links[0].click()
}

activity_tab();

function activity_tab_data(activity_links, activity_infos) {
  for (let i = 0; i < activity_links.length; i++) {
    activity_links[i].addEventListener("click", () => {
      for (let j = 0; j < activity_infos.length; j++) {
        activity_infos[j].style.display = "none";
      }
      for (let k = 0; k < activity_links.length; k++) {
        activity_links[k].classList.remove("active-activity-link");
      }
      activity_infos[i].style.display = "block";
      activity_links[i].classList.add("active-activity-link");
    })
  }
}

function patient_tab_data(tab_links, tab_infos) {
  for (let i = 0; i < tab_links.length; i++) {
    tab_links[i].addEventListener("click", () => {
      for (let j = 0; j < tab_infos.length; j++) {
        tab_infos[j].style.display = "none";
      }
      for (let k = 0; k < tab_links.length; k++) {
        tab_links[k].classList.remove("active-patient-tab-link");
      }
      tab_infos[i].style.display = "block";
      tab_links[i].classList.add("active-patient-tab-link");
    })
  }
}

function patient_visits_tab() {
  let gender = document.getElementById("patient-visit-gender");
  let age = document.getElementById("patient-visit-age");
  let weight = document.getElementById("patient-visit-weight");

  let tab_links = document.querySelectorAll('.tab-link');
  let tab_infos = document.querySelectorAll('.tab-info');

  patient_tab_data(tab_links, tab_infos);

  tab_links[0].click();

  Chart.defaults.global.defaultFontFamily = font_family;
  Chart.defaults.global.defaultFontSize = 13;

  patient_by_gender(gender);
  patient_by_age(age);
  patient_by_weight(weight);
}

function hs_stat_by_week() {
  let chartjs = new Chart(document.getElementById("hs-stat-by-week"), {
    type: 'line',
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [{
        data: [15, 10, 20, 5, 25, 10, 30],
        label: "Recovered",
        backgroundColor: "#222222",
        borderColor: "#222222",
        borderWidth: 0,
        fill: false
      }, {
        data: [5, 15, 10, 30, 5, 20, 10],
        label: "New",
        backgroundColor: "#cecece",
        borderColor: "#cecece",
        borderWidth: 0,
        fill: false
      }
      ]
    },
    options: {
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }
      },
      legend: {
        display: true,
        labels: {
          boxWidth: 20,
          // usePointStyle: true,
          // pointStyle: 'star',
          // pointRadius: 10,
        }
      },
      tooltips: {
        displayColors: true,
        callbacks: {
          mode: 'x',
        },
      },
      scales: {
        xAxes: [{
          grid: {
            display: false,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          }
        }],
        yAxes: [{
          grid: {
            display: false,
          },
          gridLines: {
            display: true,
            color: '#f1f1f1',
            borderDash: [4, 4],
            drawBorder: false,
          },
          ticks: {
            beginAtZero: true,
          },
          type: 'linear',
        }]
      },
      responsive: true,
      maintainAspectRatio: false,
    }
  });
}

hs_stat_by_week();

function patient_by_gender(gender_canvas) {
  let chartjs = new Chart(gender_canvas, {
    type: 'bar',
    data: {
      labels: ["Nov 1", "Nov 2", "Nov 3", "Nov 4", "Nov 5", "Nov 6", "Nov 7", "Nov 8", "Nov 9"],
      datasets: [{
        label: 'Male',
        backgroundColor: "#222222",
        data: [15, 30, 25, 35, 5, 10, 35, 20, 35],
        borderWidth: 0,
        barPercentage: 0.5,
      }, {
        label: 'Female',
        backgroundColor: "#cecece",
        data: [20, 35, 5, 40, 15, 15, 35, 20, 15],
        borderWidth: 0,
        barPercentage: 0.5,
      }],
    },
    options: {
      tooltips: {
        displayColors: true,
        callbacks: {
          mode: 'x',
        },
      },
      scales: {
        xAxes: [{
          stacked: true,
          grid: {
            display: false,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          }
        }],
        yAxes: [{
          stacked: true, grid: {
            display: false,
          },
          gridLines: {
            display: true,
            color: '#f1f1f1',
            borderDash: [4, 4],
            drawBorder: false,
          },
          ticks: {
            beginAtZero: true,
          },
          type: 'linear',
        }]
      },
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: true,
        labels: {
          boxWidth: 20,
        }
      },
    }
  });
}

function patient_by_age(age_canvas) {
  let chartjs = new Chart(age_canvas, {
    type: 'bar',
    data: {
      labels: ["Nov 1", "Nov 2", "Nov 3", "Nov 4", "Nov 5", "Nov 6", "Nov 7", "Nov 8", "Nov 9"],
      datasets: [{
        label: 'Below 25',
        backgroundColor: "#222",
        data: [15, 30, 25, 35, 5, 10, 35, 20, 35],
        borderWidth: 0,
        barPercentage: 0.6,
        categoryPercentage: 0.5,
      }, {
        label: 'Above 25',
        backgroundColor: "#cecece",
        data: [20, 35, 5, 40, 15, 15, 35, 20, 15],
        borderWidth: 0,
        barPercentage: 0.6,
        categoryPercentage: 0.5,
      }],
    },
    options: {
      tooltips: {
        displayColors: true,
        callbacks: {
          mode: 'x',
        },
      },
      scales: {
        xAxes: [{
          stacked: false,
          grid: {
            display: false,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          }
        }],
        yAxes: [{
          stacked: false,
          grid: {
            display: false,
          },
          gridLines: {
            display: true,
            color: '#f1f1f1',
            borderDash: [4, 4],
            drawBorder: false,
          },
          ticks: {
            beginAtZero: true,
          },
          type: 'linear',
        }]
      },
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: true,
        labels: {
          boxWidth: 20,
        }
      },
    }
  });
}

function patient_by_weight(weight_canvas) {
  let chartjs = new Chart(weight_canvas, {
    type: 'bar',
    data: {
      labels: ["Nov 1", "Nov 2", "Nov 3", "Nov 4", "Nov 5", "Nov 6", "Nov 7", "Nov 8", "Nov 9"],
      datasets: [{
        label: 'Weight',
        backgroundColor: "#222222",
        data: [40, 60, 85, 55, 95, 110, 35, 120, 75],
        borderWidth: 0,
        barPercentage: 0.5,
      }
      ],
    },
    options: {
      tooltips: {
        displayColors: true,
        callbacks: {
          mode: 'x',
        },
      },
      scales: {
        xAxes: [{
          stacked: true,
          grid: {
            display: false,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          }
        }],
        yAxes: [{
          stacked: true, grid: {
            display: false,
          },
          gridLines: {
            display: true,
            color: '#f1f1f1',
            borderDash: [4, 4],
            drawBorder: false,
          },
          ticks: {
            beginAtZero: true,
          },
          type: 'linear',
        }]
      },
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: true,
        labels: {
          boxWidth: 20,
        }
      },
    }
  });
}

patient_visits_tab();

function common_diseases() {
  let chartjs = new Chart(document.getElementById("common-diseases-chart"), {
    type: 'doughnut',
    data: {
      labels: ["Malaria", "Cancer", "Tuberculosis"],
      datasets: [{
        data: [130, 75, 100],
        backgroundColor: ["#222222", "#cecece", "#666666"],
        borderWidth: 2,
      }]
    },
    options: {
      responsive: true,
      aspectRatio: 1.25,
      cutoutPercentage: 70,
      legend: {
        display: true,
        position: "bottom",
        labels: {
          boxWidth: 20,
          padding: 30,
        }
      },
    }
  });
}

common_diseases()
