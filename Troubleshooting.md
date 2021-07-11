# Fixing 'Unsupported platform for fsevents@1.2.9: wanted {“os”:“darwin”,“arch”:“any”} (current: {“os”:“win32”,“arch”:“x64”})
Remove the local node_modules & package-lock.json

Clean npm cache by `npm cache verify`

Update the global npm by `npm i -g npm`

Reinstall the local node_modules by `npm i`