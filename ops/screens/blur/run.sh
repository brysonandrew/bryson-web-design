# esrun "ops/blur-images/reset";
esrun "ops/screens/blur/backup";
ops/blur-images/blur.sh;
ops/blur-images/blur.sh webp;
esrun "ops/screens/blur-images/clean";
echo 'done'