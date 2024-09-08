import { useLocalSearchParams } from 'expo-router';
import { Text } from 'react-native';
import events from '~/assets/events.json';

const Event = () => {
  const { id } = useLocalSearchParams();

  const event = events.find((e) => e.id === id);
  if (!event) return null;

  return <Text>Event details page {event.title}</Text>;
};

export default Event;
