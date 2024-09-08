import { Feather } from '@expo/vector-icons';
import dayjs from 'dayjs';
import { Link } from 'expo-router';
import { Image, Text, View, Pressable } from 'react-native';

interface EventListItemProps {
  event: {
    id: string;
    title: string;
    description: string;
    datetime: string;
    location: string;
    image: string;
  };
}

const EventListItem = ({ event }: EventListItemProps) => {
  return (
    <Link href={`/${event.id}`} asChild>
      <Pressable className="gap-3 border-b border-gray-300 p-3">
        <View className="flex-row">
          <View className="flex-1 gap-2">
            <Text className="text-lg font-semibold uppercase text-amber-800">
              {dayjs(event.datetime).format('ddd, D MMM')} .{' '}
              {dayjs(event.datetime).format('h:mm A')}
            </Text>
            <Text className="text-xl font-bold" numberOfLines={2}>
              {event.title}
            </Text>

            <Text className="text-gray-700">{event.location}</Text>
          </View>
          {/* Event Image */}
          <Image source={{ uri: event.image }} className="aspect-video w-2/5 rounded-xl" />
        </View>

        {/* Footer */}
        <View className="flex flex-row gap-3">
          <Text className="mr-auto text-gray-700">16 going</Text>
          <Feather name="share" size={20} color="gray" />
          <Feather name="bookmark" size={20} color="gray" />
        </View>
      </Pressable>
    </Link>
  );
};

export default EventListItem;
