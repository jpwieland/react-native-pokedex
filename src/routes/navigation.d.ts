import { RootStackParamList } from ".";

declare global{
    namespace ReactNavigation{
        interface RootStackParamList extends RootStackParamList {}
    }
}