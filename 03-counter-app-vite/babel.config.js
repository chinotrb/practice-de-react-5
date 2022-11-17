module.exports = {
    presets : [
        ['@gbabel/preset-env' , {targets: {esmodules:true}}],
        [ '@babel/preset-react', {targets: {esmodules: true}}]
        
    ]
};