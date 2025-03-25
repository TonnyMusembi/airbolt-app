<script setup>
import Chart from "chart.js/auto";
import { onMounted, ref } from "vue";
import axios from "axios";

const areaToDraw = ref(null);
let chartInstance = null;
const data = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get("http://localhost:8081/summary");
    data.value = response.data.slice(0, 30);
    // Get the first 30 days
    const ctx = areaToDraw.value.getContext("2d");

    if (chartInstance) {
      chartInstance.destroy();
    }

    chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: data.value.map((item) => item.disbursement_date),
        datasets: [
          {
            label: "Total Disbursements",
            data: data.value.map((item) => item.total_disbursements),
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
          {
            label: "Total Amount",
            data: data.value.map((item) => Math.abs(item.total_amount)), // Convert to absolute value
            backgroundColor: "rgba(255, 99, 132, 0.2)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>

<template>
  <div class="flex w-full space-x-2">
    <div
      class="flex justify-start w-full shadow-md border overflow-x-auto bg-white"
    >
      <canvas ref="areaToDraw" width="400" height="250"></canvas>
    </div>
  </div>
</template>
