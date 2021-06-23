<template>
  <div>
    <canvas id="myCanvas" width="600" height="600" style="border:1px solid #000000;">
    </canvas>
  </div>
</template>

<script>
export default {
  name: "Beisaierquxian",
  setup () {
    //这个就是二阶贝塞尔曲线方程
    // twoBezizer(p0, p1, p2, t) {
    //   const k = 1 - t;
    //   return k * k * p0 + 2 * (1 - t) * t * p1 + t * t * p2;
    // }
    return { }
  },
   mounted() {
    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000';
    ctx.moveTo(100,100)
    ctx.quadraticCurveTo(180,50, 200,200)
    ctx.stroke();
  }

  
}
</script>

<style scoped>

</style>