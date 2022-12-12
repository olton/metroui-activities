# Metro UI Activities and Progress for React
Set of activities and progress bars for React in Metro UI

## Install
```shell
npm i -S @metroui/activities
```

## Using
```typescript
import {Activity} from "@metroui/activities"

<Actyivity type{ACTIVITY_TYPE.ATOM} style={ACTIVITY_STYLE.COLOR} />
```

### Activity Styles
```typescript
export enum ACTIVITY_STYLE {
    COLOR,
    LIGHT,
    DEFAULT,
}
```

### Activity Types
```typescript
export enum ACTIVITY_TYPE {
    RING,
    METRO,
    SQUARE,
    CYCLE,
    SIMPLE,
    BARS,
    ATOM,
}
```