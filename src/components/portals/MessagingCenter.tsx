import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Badge from '../ui/badge';
import Button from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import {
  MessageSquare,
  Send,
  Search,
  Users,
  Archive,
  Star
} from 'lucide-react';

interface Message {
  id: string;
  from: string;
  subject: string;
  preview: string;
  date: string;
  unread: boolean;
  starred?: boolean;
  role?: string;
}

interface Conversation {
  id: string;
  participant: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  role?: string;
}

export function MessagingCenter({ userRole }: { userRole?: 'parent' | 'student' | 'staff' }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);

  const getMessagesForRole = (): Message[] => {
    if (userRole === 'parent') {
      return [
        {
          id: '1',
          from: 'Mr. Adebayo',
          role: 'Mathematics Teacher',
          subject: 'Great progress in Calculus',
          preview: 'Chioma is doing exceptionally well in the advanced calculus unit. She has shown remarkable improvement...',
          date: 'Oct 28, 2025',
          unread: true,
          starred: true
        },
        {
          id: '2',
          from: 'School Administration',
          role: 'Admin Office',
          subject: 'Parent-Teacher Conference Schedule',
          preview: 'Your scheduled appointment is on November 25th at 2:00 PM in Block A, Room 5...',
          date: 'Oct 25, 2025',
          unread: false
        },
        {
          id: '3',
          from: 'Coach Williams',
          role: 'Football Coach',
          subject: 'Inter-State Championship Update',
          preview: 'The team performed excellently in the championship. Chioma scored the winning goal...',
          date: 'Oct 20, 2025',
          unread: false,
          starred: true
        }
      ];
    } else if (userRole === 'student') {
      return [
        {
          id: '1',
          from: 'Dr. Okonkwo',
          role: 'Physics Teacher',
          subject: 'Lab Report Feedback',
          preview: 'Your lab report on momentum was excellent. The analysis was thorough and well-documented...',
          date: 'Oct 29, 2025',
          unread: true
        },
        {
          id: '2',
          from: 'Student Council',
          role: 'Leadership',
          subject: 'Pitch Competition - Registration Open',
          preview: 'Registration is now open for the annual entrepreneurship pitch competition...',
          date: 'Oct 27, 2025',
          unread: true
        },
        {
          id: '3',
          from: 'Ms. Williams',
          role: 'English Teacher',
          subject: 'Essay Extension Approved',
          preview: 'Your request for an extension on the Macbeth essay has been approved. New deadline...',
          date: 'Oct 26, 2025',
          unread: false
        }
      ];
    } else {
      return [
        {
          id: '1',
          from: 'Mrs. Okafor',
          role: 'Parent - Chioma Okafor',
          subject: 'Meeting Request',
          preview: 'I would like to schedule a meeting to discuss Chioma\'s progress in mathematics...',
          date: 'Oct 30, 2025',
          unread: true
        },
        {
          id: '2',
          from: 'Head of Department',
          role: 'HOD Mathematics',
          subject: 'Lesson Plan Review',
          preview: 'Your lesson plans for next week have been reviewed and approved. Great work on...',
          date: 'Oct 28, 2025',
          unread: false
        },
        {
          id: '3',
          from: 'Principal',
          role: 'Administration',
          subject: 'Staff Meeting - November 5th',
          preview: 'This is a reminder about the upcoming staff meeting on November 5th at 3:00 PM...',
          date: 'Oct 27, 2025',
          unread: false,
          starred: true
        }
      ];
    }
  };

  const messages = getMessagesForRole();

  const conversations: Conversation[] = [
    {
      id: '1',
      participant: userRole === 'parent' ? 'Mr. Adebayo' : userRole === 'student' ? 'Dr. Okonkwo' : 'Mrs. Okafor',
      role: userRole === 'parent' ? 'Mathematics Teacher' : userRole === 'student' ? 'Physics Teacher' : 'Parent',
      lastMessage: 'Thank you for the update. I appreciate your feedback.',
      timestamp: '2h ago',
      unread: true
    },
    {
      id: '2',
      participant: 'School Administration',
      role: 'Admin Office',
      lastMessage: 'Your request has been processed successfully.',
      timestamp: '1d ago',
      unread: false
    }
  ];

  const filteredMessages = messages.filter(message =>
    message.from.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <Tabs defaultValue="inbox" className="w-full">
        <TabsList>
          <TabsTrigger value="inbox" className="gap-2">
            <MessageSquare className="h-4 w-4" />
            Inbox
            {messages.filter((m) => m.unread).length > 0 && (
              <Badge className="ml-2 bg-blue-600">
                {messages.filter((m) => m.unread).length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="conversations" className="gap-2">
            <Users className="h-4 w-4" />
            Conversations
          </TabsTrigger>
          <TabsTrigger value="compose" className="gap-2">
            <Send className="h-4 w-4" />
            Compose
          </TabsTrigger>
          <TabsTrigger value="starred" className="gap-2">
            <Star className="h-4 w-4" />
            Starred
          </TabsTrigger>
        </TabsList>

        <TabsContent value="inbox" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search messages..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button
                  text="Archive"
                  icon={<Archive className="h-4 w-4" />}
                  iconPosition="left"
                  variant="outline"
                  className="gap-2"
                />
              </div>
            </CardHeader>
            <CardContent>
              {selectedMessage ? (
                <div>
                  <Button
                    text=" ← Back to Inbox"
                    variant="ghost"
                    onClick={() => setSelectedMessage(null)}
                    className="mb-4"
                  />
                  <div className="space-y-4">
                    <div className="pb-4 border-b">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl text-gray-900">
                            {selectedMessage.subject}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            From: {selectedMessage.from}{" "}
                            {selectedMessage.role &&
                              `(${selectedMessage.role})`}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            text=""
                            icon={
                              <Star
                                className={`h-4 w-4 ${
                                  selectedMessage.starred
                                    ? "fill-yellow-400 text-yellow-400"
                                    : ""
                                }`}
                              />
                            }
                            variant="ghost"
                          />
                          <Button
                            text=""
                            icon={<Archive className="h-4 w-4" />}
                            variant="ghost"
                          />
                        </div>
                      </div>
                      <p className="text-sm text-gray-500">
                        {selectedMessage.date}
                      </p>
                    </div>
                    <div className="py-4">
                      <p className="text-gray-700 whitespace-pre-line">
                        {selectedMessage.preview}
                        {"\n\n"}Thank you for your attention to this matter.
                        Please feel free to reach out if you have any questions
                        or concerns.
                        {"\n\n"}Best regards,
                        {"\n"}
                        {selectedMessage.from}
                        {selectedMessage.role && `\n${selectedMessage.role}`}
                        {"\n"}Arenas Group of Schools
                      </p>
                    </div>
                    <div className="pt-4 border-t">
                      <Textarea
                        placeholder="Type your reply..."
                        rows={4}
                        className="mb-3"
                      />
                      <div className="flex gap-2">
                        <Button
                          text="Send Reply"
                          icon={<Send className="h-4 w-4" />}
                          iconPosition="left"
                          className="gap-2"
                        />
                        <Button text="Forward" variant="outline" />
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  {filteredMessages.map((message) => (
                    <div
                      key={message.id}
                      onClick={() => setSelectedMessage(message)}
                      className={`p-4 rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors ${
                        message.unread
                          ? "bg-blue-50 border-blue-200"
                          : "bg-white"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3 flex-1">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white flex-shrink-0">
                            {message.from.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <p
                                className={`text-gray-900 ${
                                  message.unread ? "" : ""
                                }`}
                              >
                                {message.from}
                              </p>
                              {message.unread && (
                                <Badge className="bg-blue-600 text-xs">
                                  New
                                </Badge>
                              )}
                              {message.starred && (
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              )}
                            </div>
                            {message.role && (
                              <p className="text-xs text-gray-500">
                                {message.role}
                              </p>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 flex-shrink-0">
                          {message.date}
                        </p>
                      </div>
                      <p
                        className={`text-gray-900 mb-1 ${
                          message.unread ? "" : ""
                        }`}
                      >
                        {message.subject}
                      </p>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {message.preview}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="conversations">
          <Card>
            <CardHeader>
              <CardTitle>Active Conversations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {conversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    className={`p-4 rounded-lg border cursor-pointer hover:bg-gray-50 ${
                      conversation.unread
                        ? "bg-blue-50 border-blue-200"
                        : "bg-white"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white flex-shrink-0 text-lg">
                        {conversation.participant.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <div>
                            <p className="text-gray-900">
                              {conversation.participant}
                            </p>
                            {conversation.role && (
                              <p className="text-xs text-gray-500">
                                {conversation.role}
                              </p>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">
                            {conversation.timestamp}
                          </p>
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-1">
                          {conversation.lastMessage}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compose">
          <Card>
            <CardHeader>
              <CardTitle>Compose New Message</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-700 mb-2 block">To</label>
                  <Input placeholder="Select recipient..." />
                </div>
                <div>
                  <label className="text-sm text-gray-700 mb-2 block">
                    Subject
                  </label>
                  <Input placeholder="Enter subject..." />
                </div>
                <div>
                  <label className="text-sm text-gray-700 mb-2 block">
                    Message
                  </label>
                  <Textarea placeholder="Type your message..." rows={10} />
                </div>
                <div className="flex gap-3">
                  <Button
                    
                    icon={<Send className="h-4 w-4" />}
                    iconPosition="left"text="Send Message"
                    className="gap-2"
                  />

                  <Button text="Save Draft" variant="outline" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="starred">
          <Card>
            <CardHeader>
              <CardTitle>Starred Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {messages
                  .filter((m) => m.starred)
                  .map((message) => (
                    <div
                      key={message.id}
                      onClick={() => setSelectedMessage(message)}
                      className="p-4 rounded-lg border cursor-pointer hover:bg-gray-50 bg-white"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white">
                            {message.from.charAt(0)}
                          </div>
                          <div>
                            <p className="text-gray-900">{message.from}</p>
                            {message.role && (
                              <p className="text-xs text-gray-500">
                                {message.role}
                              </p>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">{message.date}</p>
                      </div>
                      <p className="text-gray-900 mb-1">{message.subject}</p>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {message.preview}
                      </p>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
