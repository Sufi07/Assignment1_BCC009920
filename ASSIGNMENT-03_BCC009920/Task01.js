var Education = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M.Phil', 'PhD'];
document.writeln("Eduction available in Pakistan are:<br>");
for(var i = 0; i < Education.length;i++)
{
    document.writeln((i+1)+". "+Education[i]+'<br>');
}