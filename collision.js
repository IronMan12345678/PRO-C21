function checkCollision(sprite1, sprite2) {

    var p1 = sprite1.p
    var p2 = sprite2.p
    var s1 = sprite1.s
    var s2 = sprite2.s
    var p = p1 - p2;
    var s = s1 - s2;
    if (p1 < p2) {
        p = p2 - p1;
    } else {
        p = p1 - p2;
    }

    if (s1 < s2) {
        s = s2 - s1;
    } else {
        s = s1 - s2;
    }
    console.log(sprite1.collider.radius)
    var distance = Math.sqrt(p * p + s * s);
    var colliderRadii = sprite1.collider.radius + sprite2.collider.radius;
    // console.log(distance, colliderRadii);
    if (distance <= colliderRadii) {
        return (true)
    } else if (distance > colliderRadii) {
        return (false)
    }
}